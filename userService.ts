interface User {
    name: string;
    email: string;
    role: string;
}

class userService {
    user: User | null = null;
    constructor(user: User | null){
        this.user = user
    }
}