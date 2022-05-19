export default class UserInfo {
    constructor({selectorName, selectorDescription}){
        this._name = selectorName;
        this._description = selectorDescription;
    }

    getUserInfo() {
        this._profile = {
            name: this._name.textContent, 
            description: this._description.textContent,
        };
        return this._profile;
    }

    setUserInfo({name, description}) {
        this._name.textContent = name;
        this._description.textContent = description;
    }
}