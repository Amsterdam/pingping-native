#import "AppDelegate.h"

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <React/RCTLinkingManager.h>
#import "RNNotifications.h"
#import "RNBootSplash.h"

// #ifdef FB_SONARKIT_ENABLED
// #import <FlipperKit/FlipperClient.h>
// #import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>
// #import <FlipperKitUserDefaultsPlugin/FKUserDefaultsPlugin.h>
// #import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>
// #import <SKIOSNetworkPlugin/SKIOSNetworkAdapter.h>
// #import <FlipperKitReactPlugin/FlipperKitReactPlugin.h>

// static void InitializeFlipper(UIApplication *application) {
//   FlipperClient *client = [FlipperClient sharedClient];
//   SKDescriptorMapper *layoutDescriptorMapper = [[SKDescriptorMapper alloc] initWithDefaults];
//   [client addPlugin:[[FlipperKitLayoutPlugin alloc] initWithRootNode:application withDescriptorMapper:layoutDescriptorMapper]];
//   [client addPlugin:[[FKUserDefaultsPlugin alloc] initWithSuiteName:nil]];
//   [client addPlugin:[FlipperKitReactPlugin new]];
//   [client addPlugin:[[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];
//   [client start];
// }
// #endif

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
// #ifdef FB_SONARKIT_ENABLED
//   InitializeFlipper(application);
// #endif

  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                   moduleName:@"pingpingNative"
                                            initialProperties:nil];

  if (@available(iOS 13.0, *)) {
      rootView.backgroundColor = [UIColor systemBackgroundColor];
  } else {
      rootView.backgroundColor = [UIColor whiteColor];
  }

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  [RNNotifications startMonitorNotifications];
  [RNBootSplash initWithStoryboard:@"BootSplash" rootView:rootView]; // <- initialization using the storyboard file name
  return YES;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
  [RNNotifications didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
}

- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
  [RNNotifications didFailToRegisterForRemoteNotificationsWithError:error];
}

- (BOOL)application:(UIApplication *)application
openURL:(NSURL *)url
options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
return [RCTLinkingManager application:application openURL:url options:options];
}

@end
