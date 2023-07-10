import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => (
    <span className={classNames('loader', {}, [className])} />
);
