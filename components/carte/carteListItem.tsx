import styles from "../../styles/carteElement.module.css";

interface CarteElementProps {
    content: string,
    selected: boolean
}

export default function CarteListItem({ content, selected }: CarteElementProps) {
    return (
        <span className={styles.item + (selected ? ' ' + styles.selected : '')}>{content}</span>
    );
}