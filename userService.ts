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
        return this.user?.name;
    }
}

