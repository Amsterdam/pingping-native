import { withKnobs } from '@storybook/addon-ondevice-knobs';
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';

import './rn-addons';

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => {
	require('./stories');
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
	asyncStorage: require('@react-native-community/async-storage').default,
});

export default StorybookUIRoot;
