export default class UserInfo {
    constructor({nameElement, descriptionElement, avatarElement}){
        this._name = nameElement;
        this._description = descriptionElement;
        this._avatar = avatarElement;
    }

    getUserInfo() {
        this._profile = {
        name: this._name.textContent, 
        about: this._description.textContent,
    };
        return this._profile;
    }

    setUserInfo({name, about, avatar, _id}) {
        this._name.textContent = name;
        this._description.textContent = about;
        this._avatar.src = avatar;
        this._id = _id;
    }

    getMainUserId() {
        return this._id;
    }
}