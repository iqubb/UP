function createPost(ID, description, storeName, purchasePrice) {
    return {
        ID,
        description,
        storeName,
        purchasePrice
    };
}

class PostsInteraction {
    postsArray = [];
    MAX_NUMBER_OF_POSTS = 20;
    numberOfPosts = 0;


    constructor() {
        this.initializeArrayOfPosts(this.MAX_NUMBER_OF_POSTS / 2);
    }

    isValidatePost(Post) {
        return typeof Post.ID === "number" && typeof Post.description === "string" &&
            typeof Post.storeName === "string" && typeof Post.purchasePrice === "number";
    }

    printPostArray() {
        for (const currentElement of this.postsArray) {
            console.log(currentElement);
        }
    }

    initializeArrayOfPosts(numberOfPosts) {
        this.postsArray.push(createPost(27, "Sneakers", "Nike", 250));
		this.postsArray.push(createPost(29, "Sneakers", "Puma", 50));    	
        this.numberOfPosts = numberOfPosts + 2;
        for (let i = 0; i < numberOfPosts; ++i) {
            this.postsArray.push(createPost(i, "Ball", "Adidas", 150 - i));
        }
    }

    getPost(ID) {
        return this.postsArray.find((element, index, array) => {
            return element.ID === ID
        });
    }

    getPostNumber() {
        return this.numberOfPosts;
    }

    addPost(Post) {
        if (!this.isValidatePost(Post)) {
            console.log("The post is set incorrectly");
            return false;
        } else {
            this.numberOfPosts++;
            this.postsArray.push(Post);
            console.log("Post added");
            return true;
        }
    }

    removePost(ID) {
        let isPostWithThisIdHere = false;

        for (let i = 0; i < this.postsArray.length; ++i) {
            if (this.postsArray[i].ID === ID) {
                this.numberOfPosts--;
                isPostWithThisIdHere = true;
                this.postsArray.splice(i, 1);
            }
        }


        if (!isPostWithThisIdHere) console.log("There is no post with this ID in array");

        this.printPostArray();
    }

    editPost(ID, Post) {
        if (!this.isValidatePost(Post)) {
            console.log("The post is set incorrectly");
        } else {
        	for(let i = 0; i < this.postsArray.length; ++i) {
        		if(this.postsArray[i].ID == ID) {
        			this.postsArray[i] = Post;
        			return true;
        		}
        	}
        }
    }

    sortArrayOfPostsByPrice() {
    	console.log("Array sorted by price");
    	this.postsArray.sort((a, b) => a.purchasePrice > b.purchasePrice ? 1 : -1);
    }

    sortArrayOfPostsByID() {
    	console.log("Array sorted by ID");
    	this.postsArray.sort((a, b) => a.ID > b.ID ? 1 : -1);
    }

    sortArrayOfPostsByStoreName() {
    	console.log("Array sorted by store name");
    	this.postsArray.sort((a, b) => a.storeName > b.storeName ? 1 : -1);
    }

}


let a = new PostsInteraction();

console.log(a.getPost(1));

a.removePost(1);
a.printPostArray();


console.log(a.isValidatePost({
    ID: 5,
    description: "ball",
    storeName: "Adidas",
    purchasePrice: 100
}));

console.log(a.isValidatePost({
    ID: 5,
    description: "ball",
    storeName: "Adidas",
    purchasePrice: "notNumber"
}));



a.addPost({
    ID: 90,
    description: "ball",
    storeName: "Adidas",
    purchasePrice: 1000
});

a.addPost({
    ID: 90,
    description: "Sneakers",
    storeName: "Adidas",
    purchasePrice: 1000
});

a.printPostArray();

a.addPost({
    ID: 5,
    description: "ball",
    storeName: "Adidas",
    purchasePrice: "notNumber"
});



a.sortArrayOfPostsByPrice();
a.printPostArray();

a.sortArrayOfPostsByID();
a.printPostArray();

a.sortArrayOfPostsByStoreName();
a.printPostArray();