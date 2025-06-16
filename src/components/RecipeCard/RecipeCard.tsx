import {Recipe} from "@/types/recipe";
import styles from "./RecipeCard.module.scss";

interface RecipeCardProps {
    recipe: Recipe;
}

export default function RecipeCard({recipe}: RecipeCardProps) {
    return (
        <div className={styles.card}>
            <img src={recipe.image} alt={recipe.title} className={styles.image} />
            <h3 className={styles.title}>{recipe.title}</h3>
            <ul className={styles.ingredients}>
                {recipe.ingredients.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </div>
    )
}