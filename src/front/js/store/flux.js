const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      searchInput: ["mushrooms", "quinoa", "cheese"],
      pillDietInput: [],
      isLoaded: false,
      error: null,
      items: [],
      shoppingList: [],
      userToken: localStorage.getItem("jwt-token") ?? null,
      userLogged: false,
      userEmail: null,
      userId: null,
    },
    actions: {
      searchInputHandler: (textSearch) => {
        setStore({ searchInput: textSearch });
      },
      searchAPI: () => {
        const store = getStore();
        const search = store.searchInput;
        const diet = store.pillDietInput;
        fetch(
          `https://api.edamam.com/api/recipes/v2?type=public&app_id=e5010e00&app_key=0326e037783040d1e8513857ee63d982&q=${search}&healt=${diet}`
        )
          .then((response) => response.json())
          .then(
            (result) => {
              setStore({ isLoaded: true });
              setStore({ items: result.hits });
              // console.table(result.hits[0].recipe);
            },
            (error) => {
              setStore({ isLoaded: true });
              setStore({ error: error });
              console.log("nooooooooo", error);
            }
          );
      },
      addShoppingList: (ingredient) => {
        const store = getStore();
        setStore({ shoppingList: [...store.shoppingList, ingredient] });
      },
      removeShoppingList: (ingredient) => {
        const store = getStore();
        const list = store.shoppingList.filter((line) => {
          if (
            line.recipeUri === ingredient.recipeUri &&
            line.ingredientIndex === ingredient.ingredientIndex
          ) {
            return false;
          } else {
            return true;
          }
        });
        setStore({ shoppingList: list });
      },
      removeShoppingListByIndex: (index) => {
        const store = getStore();
        const list = store.shoppingList.filter((line, i) => {
          if (i === index) {
            return false;
          } else {
            return true;
          }
        });
        setStore({ shoppingList: list });
      },
      updatePillArr: (dietPlan) => {
        const store = getStore();
        const element = store.pillDietInput.find((elem) => {
          return elem === dietPlan;
        });
        console.log("element", element);
        if (element === undefined) {
          setStore({ pillDietInput: [...store.pillDietInput, dietPlan] });
        } else {
          const newArr = store.pillDietInput.filter((elem) => {
            if (elem === dietPlan) {
              return false;
            } else {
              return true;
            }
          });
          setStore({ pillDietInput: newArr });
        }
      },
      clearPillArr: () => {
        setStore({ pillDietInput: [] });
      },
      login: (email, password) => {
        fetch(
          "https://3001-alpalma95-dontwastefood-qd2xig4w70o.ws-eu53.gitpod.io/api/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email, password: password }),
          }
        )
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem("jwt-token", data.token);
            setStore({ userToken: localStorage.getItem("jwt-token") });
          })
          .catch((err) => alert("Invalid credentials!"));
      },
      getToken: () => {
        setStore({
          userToken: localStorage.getItem("jwt-token") ?? null,
        });
      },
    },
  };
};

export default getState;
