import { ReactNode } from 'react';

interface Props {
	open: boolean;
	onClose: () => void;
	children: ReactNode | Element[];
}

export default Props;
