import { Helper } from './helper.js';


export class Api {
  constructor() {
    this.baseURL = 'https://www.themealdb.com/api/json/v1/';
    this.apiKey = import.meta.env.VITE_API_KEY;
  }

  getResource = async (url) => {
    const fullUrl = this.baseURL + this.apiKey + url;

    try {
      const resource = await fetch(fullUrl).then((response) => response.json());
      return resource;
    } catch(error) {
      console.log(`Error fetch to url ${fullUrl}`);
    }

  }

  getCatalog = async () => {
    const data = this.getResource('/categories.php')
      .then((data) => data.categories.map((item) => {
        return this.createCalalogItem(item) || [];
      }));

      return data;
  }

  createCalalogItem(item) {
    return {
      id: item.idCategory,
      title: item.strCategory,
      description: item.strCategoryDescription,
      img: item.strCategoryThumb,
    };
  }

  getCategory = async (categoryName) => {
    const data = this.getResource(`/filter.php?c=${categoryName}`)
      .then((data) => data.meals.map((item) => {
        return this.createCategoryItem(item) || [];
      }));

      return data;
  }

  createCategoryItem(item) {
    return {
      id: item.idMeal,
      title: item.strMeal,
      img: item.strMealThumb,
    };
  }

  getMeal = async (id) => {
    const data = this.getResource(`/lookup.php?i=${id}`)
      .then((data) => this.createMealItem(data.meals[0]));

      return data;
  }

  createMealItem(item) {
    return {
      id: item.idMeal,
      title: item.strMeal,
      category: item.strCategory,
      img: item.strMealThumb,
      description: item.strInstructions,
      country: item.strArea,
    };
  }

}