import User from '../model/user-schema.js';

const userLogin = async (request, response) => {
    try {
        const username = request.body.username;
        const password = request.body.password;
        const user = await User.findOne({ username: username, password: password });
        if (user) {
            return response.status(200).json({ data: user });
        } else {
            return response.status(401).json({ message: 'Invalid Login' });
        }
    } catch (error) {
        response.status(500).json({ message: 'Error: ' + error.message });
    }
};

const userSignUp = async (request, response) => {
    try {
        const exist = await User.findOne({ username: request.body.username });
        if (exist) {
            return response.status(401).json({ message: 'User already exists' });
        }
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();
        response.status(200).json({ message: user });
    } catch (error) {
        response.status(500).json({ message: 'Error: ' + error.message });
    }
};

export { userLogin, userSignUp };
