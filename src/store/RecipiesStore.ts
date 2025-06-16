import {makeAutoObservable} from "mobx";
import {Recipe} from "@/types/recipe";

export class RecipiesStore {
    recipes: Recipe[] = [];

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
    }

    get allRecipies(): Recipe[] {
        return this.recipes;
    }
}
