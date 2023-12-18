import classNames from 'classnames';
import styles from './another-button.module.scss';

export interface AnotherButtonProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AnotherButton = ({ className }: AnotherButtonProps) => {
    return <button className={styles.btn}>Button</button>;
};
