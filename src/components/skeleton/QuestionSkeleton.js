import React from 'react';

import { Dimensions } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import theme from '../../config/theme';
import Container from '../shared/Container';

const { height, width } = Dimensions.get(
	'window',
);

function RouteDetailSkeleton() {
  return <Container>
		<SkeletonPlaceholder>
			<SkeletonPlaceholder.Item
				flexDirection="column"
				justifyContent="space-between"
				height={height - 25}
			>
				<SkeletonPlaceholder.Item>
					{/* Header */}
					<SkeletonPlaceholder.Item
						flexDirection="row"
						alignItems="center"
						justifyContent="space-between"
						width="100%"
						padding={theme.spacing.s}
					>
						<SkeletonPlaceholder.Item
							width={30}
							height={30}
							borderRadius={10}
						/>
						<SkeletonPlaceholder.Item
							width={100}
							height={30}
							borderRadius={10}
						/>
						<SkeletonPlaceholder.Item
							width={70}
							height={20}
							borderRadius={10}
						/>
					</SkeletonPlaceholder.Item>
					{/* End Header */}

					{/* Question */}
					<SkeletonPlaceholder.Item
						padding={theme.spacing.m}
					>
						<SkeletonPlaceholder.Item
							width={width - 70}
							height={40}
							borderRadius={10}
							marginBottom={theme.spacing.xxs}
						/>
						<SkeletonPlaceholder.Item
							width={width - 100}
							height={40}
							borderRadius={10}
						/>
					</SkeletonPlaceholder.Item>
					{/* End Question */}
				</SkeletonPlaceholder.Item>

				{/* Button */}
				<SkeletonPlaceholder.Item
					padding={theme.spacing.l}
				>
					<SkeletonPlaceholder.Item
						width={width - 50}
						height={50}
						borderRadius={theme.borderRadius}
						marginBottom={theme.spacing.s}
					/>
					<SkeletonPlaceholder.Item
						width={width - 50}
						height={50}
						borderRadius={theme.borderRadius}
					/>
				</SkeletonPlaceholder.Item>
				{/* End Button */}

				<SkeletonPlaceholder.Item
					padding={theme.spacing.l}
				>
					<SkeletonPlaceholder.Item
						width={100}
						height={25}
						borderRadius={theme.borderRadius}
						alignSelf="flex-end"
					/>
				</SkeletonPlaceholder.Item>
			</SkeletonPlaceholder.Item>
		</SkeletonPlaceholder>
	</Container>
}

export default RouteDetailSkeleton;
