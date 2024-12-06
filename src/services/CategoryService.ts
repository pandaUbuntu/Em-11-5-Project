
export type Category = {
    id: string,
    name: string,
  }
export function createCategory(name: string): void{
    if(name.trim().length === 0){
        throw new Error("Category name cannot be empty");
    }

    if(checkCategories(name)){
        throw new Error("Category already exists");
    }

    let categories:Category[] = getCategories();

    const category:Category = {
        id: Math.random().toString(36).substr(2, 9),
        name: name
    };

    categories.push(category);

    localStorage.setItem("categories", JSON.stringify(categories));
}

export function getCategories(): Category[]{
    let jsonArray:any = localStorage.getItem("categories");
    return JSON.parse(jsonArray);
}

function checkCategories(name:string): boolean{
    const categories:Category[] = getCategories();
    let isExist:boolean = false;

    categories.forEach((category: Category) => {
        if(category.name.trim().toLowerCase() === name.trim().toLowerCase()){
            isExist = true;
        }
    });

    return isExist;
}

export function deleteCategories(id:string){
    const categories:Category[] = getCategories();
    localStorage.setItem("categories", JSON.stringify(categories.filter(category => category.id !== id)));
}

