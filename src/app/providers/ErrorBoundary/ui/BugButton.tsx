import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import cls from './BugButton.module.scss';

interface BugButtonProps {
    className?: string;
}

export const BugButton: FC<BugButtonProps> = ({ className }) => {
    const [error, setError] = useState<boolean>(false);

    const onThrow = () => setError(true);
    useEffect(() => {
        throw new Error();
    }, [error]);
    return (
        <Button
            className={classNames(cls.BugButton, {}, [className])}
            onClick={onThrow}
        >
            throw error
        </Button>
    );
};
