export default class UserInfo {
    constructor({nameElement, descriptionElement}){
        this._name = nameElement;
        this._description = descriptionElement;
    }

    getUserInfo() {
        this._profile = {
        name: this._name.textContent, 
        description: this._description.textContent,
    };
        return this._profile;
    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._description.textContent = data.description;
    }
}