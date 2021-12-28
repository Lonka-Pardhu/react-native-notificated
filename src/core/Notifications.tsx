/** @format */

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Dimensions, Platform, StyleSheet, View } from 'react-native'
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { SwipeConfig, useSwipe } from '../hooks/useSwipe'
import { LongPressGestureHandler, PanGestureHandler } from 'react-native-gesture-handler'
import { useTimer } from '../hooks/useTimer'
import { themeBase } from '../defaultConfig/components/theme'
import { emitter, useNotificationConfig } from './useNotificationConfig'
import type { EmitParam } from './createNotifications'
import { VariantsRenderer } from './VariantsRenderer'

const { width } = Dimensions.get('window')
const notificationWidth = width - themeBase.spacing.s * 2
const notificationSideMargin = themeBase.spacing.s
const initialOffsetX = -(notificationWidth + 2 * notificationSideMargin)
const initialOffsetY = -300
const targetOffsetX = width
const targetOffsetY = true ? 40 : 10
const isAndroid = Platform.OS === 'android'
const maxLongPressDragDistance = 300

type Config = EmitParam<unknown>

export const Notifications = () => {
  const notificationsConfigs = useNotificationConfig()
  const panHandlerRef = useRef(null)
  const longPressHandlerRef = useRef(null)
  const { clearTimer, resetTimer } = useTimer()
  const resetToCurrentTimer = () => resetTimer(swipeBack, getConfigTime(notificationConfig))

  const [notificationsQueue, setNotificationsQueue] = useState<Config[]>([])
  const notificationConfig = notificationsQueue[0]

  const onSwipeBack = useCallback(() => {
    emitter.emit('pop_notification')
  }, [])

  const { distance, drag, swipeIn, swipeBack, handleGestureEvent, handleStateChange } = useSwipe({
    config: isAndroid ? swipeConfigs.android : swipeConfigs.ios,
    onSwipeBack,
  })

  const handleNewNotification = useCallback(
    (config: Config) => {
      const targetTime = getConfigTime(config)
      resetTimer(swipeBack, targetTime)

      swipeIn()
    },
    [swipeIn, swipeBack, resetTimer]
  )

  const popNotification = useCallback(() => {
    setNotificationsQueue((prev) => {
      const updatedNotificationsQueue = prev.filter((_, index: number) => index !== 0)

      if (updatedNotificationsQueue.length > 0) {
        const currentNotification = updatedNotificationsQueue[0]

        handleNewNotification(currentNotification)
      }

      return updatedNotificationsQueue
    })
  }, [handleNewNotification])

  useEffect(() => {
    emitter.addListener('add_notification', (config: Config) => {
      setNotificationsQueue((prev) => {
        // Check if the unique id already in queue
        // if (config?.id && prev.filter((notification) => notification?.id === config?.id)?.length) {
        //   return prev
        // }

        if (prev.length === 0) {
          handleNewNotification(config)
        }
        return [...prev, config]
      })
    })
    emitter.addListener('pop_notification', () => {
      popNotification()
    })

    return () => {
      emitter.removeEvent('add_notification')
      emitter.removeEvent('pop_notification')
    }
  }, [popNotification, swipeBack, swipeIn, handleNewNotification])

  const animatedStyles = useAnimatedStyle(() => {
    return isAndroid
      ? {
          transform: [{ translateX: distance.value + drag.value }],
        }
      : {
          transform: [
            {
              translateY:
                distance.value +
                interpolate(drag.value, [-10, 100], [-10, 0.05], {
                  extrapolateLeft: Extrapolate.IDENTITY,
                  extrapolateRight: Extrapolate.EXTEND,
                }),
            },
          ],
        }
  })

  return (
    <PanGestureHandler
      ref={panHandlerRef}
      simultaneousHandlers={longPressHandlerRef}
      onGestureEvent={handleGestureEvent}
      onHandlerStateChange={handleStateChange}>
      <Animated.View
        testID="notificationsContainer"
        style={[
          styles.container,
          isAndroid ? styles.containerAndroid : styles.containerIos,
          animatedStyles,
        ]}>
        {notificationConfig && (
          <LongPressGestureHandler
            maxDist={maxLongPressDragDistance}
            ref={longPressHandlerRef}
            simultaneousHandlers={panHandlerRef}
            onActivated={clearTimer}
            onEnded={resetToCurrentTimer}>
            <View style={styles.boxWrapper}>
              <VariantsRenderer {...{ config: notificationsConfigs, notificationConfig }} />
              {/*<Pressable onPress={onNotificationPress(notificationConfig.onPress)}>*/}
              {/*<InAppNotification {...{ notificationConfig }} />*/}
              {/*</Pressable>*/}
            </View>
          </LongPressGestureHandler>
        )}
      </Animated.View>
    </PanGestureHandler>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: notificationWidth,
    minHeight: 30,
    left: 0,
    backgroundColor: 'transparent',
    top: 0,
    zIndex: 200,
    justifyContent: 'flex-start',
  },
  containerIos: {
    left: notificationSideMargin,
    top: 0,
  },
  containerAndroid: {
    left: notificationSideMargin - (notificationWidth + 2 * notificationSideMargin),
    top: true ? 10 : 0,
  },
  boxWrapper: {
    width: '100%',
  },
})

const getConfigTime = (_: any) => {
  return 3000
}

type ConfigTypeKey = 'ios' | 'android'

const swipeConfigs: { [key in ConfigTypeKey]: SwipeConfig } = {
  ios: {
    direction: 'y',
    initialOffset: initialOffsetY,
    targetOffset: targetOffsetY,
    distanceThreshold: 50,
    velocityThreshold: 300,
  },
  android: {
    direction: 'x',
    initialOffset: initialOffsetX,
    targetOffset: targetOffsetX,
    distanceThreshold: width * 0.4,
    velocityThreshold: 2000,
  },
}

export default Notifications
