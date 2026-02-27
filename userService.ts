interface User {
    name: string;
    email: string;
}

class userService {
    user: User | null = null;
    constructor(user: User | null){
        this.user = user
    }

    get name(){
        console.log('loading name..');
        console.log('hello world');
        return `Name is ${this.user?.name}`;
    }
}
