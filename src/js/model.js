export const state = {
  recipe: {},
};

export async function loadRecipe(id) {
  try {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      // `https://forkify-api.herokuapp.com/api/v2/recipes/#5ed6604591c37cdc054bc886`
    );

    const data = await response.json();

    if (!response.ok) throw new Error(`${data.message} (${response.status})`);

    // Restructuring the data received
    const { recipe } = data.data;

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (error) {
    alert(error);
  }
}
