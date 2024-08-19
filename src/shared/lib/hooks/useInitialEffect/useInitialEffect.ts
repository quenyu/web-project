import { useEffect } from 'react';

export const useInitialEffect = (callback: () => void) => {
	useEffect(() => {
		if (Project !== 'storybook') callback();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
