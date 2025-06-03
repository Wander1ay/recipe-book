import {makeAutoObservable} from "mobx";
import {Recipe} from "@/types/recipe";

export class RecipiesStore {
    recipies: Recipe[] = [];

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
    }

    addRecipe(recipe: Recipe) {
        this.recipies.push(recipe);
    }

    get allRecipies(): Recipe[] {
        return this.recipies;
    }
}
