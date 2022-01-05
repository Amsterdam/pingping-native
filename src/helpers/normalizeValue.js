import {
	Dimensions,
	PixelRatio,
} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get(
	'window',
);

// scale based on iphone 11 viewportsize of 414
const IPHONE_11_VIEWPORT = 414;
const scale = SCREEN_WIDTH / IPHONE_11_VIEWPORT;

export default function normalizeValue(size) {
	const newSize = size * scale;

	return Math.round(
		PixelRatio.roundToNearestPixel(newSize),
	);
}
