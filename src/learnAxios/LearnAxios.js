
// Get запрос
//axios.get('/path').then(res => {
    //console.log(res); // Результат ответа от сервера
//});
// Post запрос
//axios.post('/path', {"Name": "Vova"}).then(res => {
 //   console.log(res); // Результат ответа от сервера
//});
// Put запрос
//axios.put('/path', {"Name": "Vova"}).then(res => {
 //   console.log(res); // Результат ответа от сервера
//});
// Delete запрос
//axios.delete('/path', {"Name": "Vova"}).then(res => {
 //   console.log(res); // Результат ответа от сервера
//});

// // Запрос на получение профиля пользователя
//1/ axios.get(`https://social-network.samuraijs.com/api/1.0/profile/:`).then(response => {
//     this.props.setUsersProfile(response.data);
//2/ axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
//     this.props.setUsersProfile(response.data);
//2/ axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId?).then(response => {
//     this.props.setUsersProfile(response.data);
//     // Таким образом прокидывать в компоненты используя прет операторы
//     <ProfileData {...this.props} profile={this.props.profile} />
// <img src={props.profile.photos.large}/>
// ProfileData: null
// // условие так как сразу данные не приходят (вставить перед return)
//     if (!props/profile) {
//     return <Preloader/>
//     }
// }
// let withUrlDataContainerComponent = withRouter(ProfileContainer);
// //withUrlDataContainerComponent отдаем connect
// <Route path='/profile/:userId'
// let userId = this.props.match.params.userId
// // if (!userId) {
// userId =2;
// }
//WithCredentials: true;