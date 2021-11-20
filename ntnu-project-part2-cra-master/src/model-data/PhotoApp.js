/*
 * Model data for PROG2053 part #2 - the photo sharing site.
 * This module returns an object called PROG2053Models with the following functions:
 *
 * PROG2053Models.userListModel - A function that returns the list of users on the system. The
 * list is returned as an array of objects containing:
 *   _id  (string) - The ID of the user.
 *   first_name (string) - The first name of the user.
 *   last_name (string) - The last name of the user.
 *   location (string) - The location of the user.
 *   description (string) - A brief user description.
 *   occupation (string) - The occupation of the user.
 *
 * PROG2053Models.userModel - A function that returns the info of the specified user. Called
 * with an user ID (id), the function returns n object containing:
 *   _id  (string) - The ID of the user.
 *   first_name (string) - The first name of the user.
 *   last_name (string) - The last name of the user.
 *   location (string) - The location of the user.
 *   description (string) - A brief user description.
 *   occupation (string) - The occupation of the user.
 *
 * PROG2053Models.photoOfUserModel - A function that returns the photos belong to
 * the specified user. Called  with an user ID (id), the function returns an object containing:
 *   _id  (string) - The ID of the photo
 *   date_time (date) - he date and time the picture was taken in ISO format.
 *   file_name (string) - The file name in the image directory of the picture.
 *   user_id (string) - The user id of the picture's owner.
 *   comments: {array of objects} - An array of comment objects containing the properties:
 *        _id  (string) - The ID of the comment.
 *        date_time (date) - The date the comment was made in ISO format.
 *        comment (string) - The text of the comment.
 *        user: {object} The user info (see userMode for format) who made the comment
 *        photo_id: (string) - The ID of the photo the comment belongs to.
 *
 * PROG2053Models.schemaModel - A function that returns the test info from the fake schema.
 *                           The function returns an object containing:
 *   _id (string) - The ID of the schema
 *   __v (number) - The version number
 *   load_date_time (date) - The date the schema was made in ISO format.
 *
 *
 */

class PROG2053Models {
	// Create fake test Schema
	static schemaInfo = {
		load_date_time: 'Fri Apr 29 2016 01:45:15 GMT-0700 (PDT)',
		__v: 0,
		_id: '57231f1b30e4351f4e9f4bf6'
	};

	// Create init users.
	static im = {_id: '57231f1a30e4351f4e9f4bd7', first_name: 'Ian', last_name: 'Malcolm',
		location: 'Austin, TX', description: 'Should\'ve stayed in the car.', occupation: 'Mathematician'};
	static er = {_id: '57231f1a30e4351f4e9f4bd8', first_name: 'Ellen', last_name: 'Ripley',
		location: 'Nostromo', description: 'Lvl 6 rating. Pilot.', occupation: 'Warrant Officer'};
	static pt = {_id: '57231f1a30e4351f4e9f4bd9', first_name: 'Peregrin', last_name: 'Took',
		location: 'Gondor', description: 'Home is behind, the world ahead... ' +
				 'And there are many paths to tread. Through shadow, to the edge of night, ' +
				 'until the stars are all alight... Mist and shadow, cloud and shade, ' +
				 'all shall fade... all... shall... fade... ', occupation: 'Thain'};
	static rk = {_id: '57231f1a30e4351f4e9f4bda', first_name: 'Rey', last_name: 'Kenobi',
		location: 'D\'Qar', description: 'Excited to be here!', occupation: 'Rebel'};
	static al = {_id: '57231f1a30e4351f4e9f4bdb', first_name: 'April', last_name: 'Ludgate',
		location: 'Pawnee, IN', description: 'Witch', occupation: 'Animal Control'};
	static jo = {_id: '57231f1a30e4351f4e9f4bdc', first_name: 'John', last_name: 'Ousterhout',
		location: 'Stanford, CA', description: '<i>CS142!</i>', occupation: 'Professor'};

	static users = [
		PROG2053Models.im,
		PROG2053Models.er,
		PROG2053Models.pt,
		PROG2053Models.rk,
		PROG2053Models.al,
		PROG2053Models.jo
	];

	// Create initial photos.
	static photo1 = {_id: '57231f1a30e4351f4e9f4bdd', date_time: '2012-08-30 10:44:23', file_name: 'ouster.jpg', user_id: PROG2053Models.jo._id};
	static photo2 = {_id: '57231f1a30e4351f4e9f4bde', date_time: '2009-09-13 20:00:00', file_name: 'malcolm2.jpg', user_id: PROG2053Models.im._id};
	static photo3 = {_id: '57231f1a30e4351f4e9f4bdf', date_time: '2009-09-13 20:05:03', file_name: 'malcolm1.jpg', user_id: PROG2053Models.im._id};
	static photo4 = {_id: '57231f1a30e4351f4e9f4be0', date_time: '2013-11-18 18:02:00', file_name: 'ripley1.jpg', user_id: PROG2053Models.er._id};
	static photo5 = {_id: '57231f1a30e4351f4e9f4be1', date_time: '2013-09-20 17:30:00', file_name: 'ripley2.jpg', user_id: PROG2053Models.er._id};
	static photo6 = {_id: '57231f1a30e4351f4e9f4be2', date_time: '2009-07-10 16:02:49', file_name: 'kenobi1.jpg', user_id: PROG2053Models.rk._id};
	static photo7 = {_id: '57231f1a30e4351f4e9f4be3', date_time: '2010-03-18 23:48:00', file_name: 'kenobi2.jpg', user_id: PROG2053Models.rk._id};
	static photo8 = {_id: '57231f1a30e4351f4e9f4be4', date_time: '2010-08-30 14:26:00', file_name: 'kenobi3.jpg', user_id: PROG2053Models.rk._id};
	static photo9 = {_id: '57231f1a30e4351f4e9f4be5', date_time: '2013-12-03 09:02:00', file_name: 'took1.jpg', user_id: PROG2053Models.pt._id};
	static photo10 = {_id: '57231f1a30e4351f4e9f4be6', date_time: '2013-12-03 09:03:00', file_name: 'took2.jpg', user_id: PROG2053Models.pt._id};
	static photo11 = {_id: '57231f1a30e4351f4e9f4be7', date_time: '2013-09-04 09:16:32', file_name: 'ludgate1.jpg', user_id: PROG2053Models.al._id};
	static photo12 = {_id: '57231f1a30e4351f4e9f4be8', date_time: '2008-10-16 17:12:28', file_name: 'stick.gif', user_id: PROG2053Models.rk._id};

	static photos = [
		PROG2053Models.photo1,
		PROG2053Models.photo2,
		PROG2053Models.photo3,
		PROG2053Models.photo4,
		PROG2053Models.photo5,
		PROG2053Models.photo6,
		PROG2053Models.photo7,
		PROG2053Models.photo8,
		PROG2053Models.photo9,
		PROG2053Models.photo10,
		PROG2053Models.photo11,
		PROG2053Models.photo12
	];

	// Create initial comments.
	static comment1 = {
		_id: '57231f1a30e4351f4e9f4be9',
		date_time: '2012-09-02 14:01:00',
		comment: 'Learning new programming languages is hard... ' +
		'it\'s so easy to forget a </div>!', user: PROG2053Models.jo, photo_id: PROG2053Models.photo1._id
	};

	static comment2 = {
		_id: '57231f1a30e4351f4e9f4bea',
		date_time: '2013-09-06 14:02:00',
		comment: 'This is another comment, with a bit more text; ' +
		'if the text gets long enough, does it wrap properly ' +
		'from line to line?', user: PROG2053Models.jo, photo_id: PROG2053Models.photo1._id
	};

	static comment3 = {
		_id: '57231f1a30e4351f4e9f4beb',
		date_time: '2013-09-08 14:06:00',
		comment: 'If you see this text in <b>boldface</b> ' +
		'then HTML escaping isn\'t working properly.', user: PROG2053Models.jo, photo_id: PROG2053Models.photo1._id
	};

	static comment4 = {
		_id: '57231f1a30e4351f4e9f4bec',
		date_time: '2009-09-14 18:07:00',
		comment: 'If there is one thing the history of evolution has' +
		' taught us it\'s that life will not be contained. Life breaks ' +
		'free, it expands to new territories and crashes through ' +
		'barriers, painfully, maybe even dangerously, but, uh... well, ' +
		'there it is. Life finds a way.', user: PROG2053Models.im, photo_id: PROG2053Models.photo2._id
	};

	static comment5 = {
		_id: '57231f1a30e4351f4e9f4bed',
		date_time: '2013-11-28 17:45:13',
		comment: 'Back from my trip. Did IQs just... drop sharply while I was ' +
		'away?', user: PROG2053Models.er, photo_id: PROG2053Models.photo5._id
	};

	static comment6 = {
		_id: '57231f1a30e4351f4e9f4bee',
		date_time: '2013-11-02 14:07:00',
		comment: 'Hey Rey, great form. Love what ' +
		'you do with the scavenged tech, got any tips?', user: PROG2053Models.er, photo_id: PROG2053Models.photo7._id
	};

	static comment7 = {
		_id: '57231f1a30e4351f4e9f4bef',
		date_time: '2013-11-02 14:07:00',
		comment: 'Definitely! I love your work! I\'m away on a trip at ' +
		'the moment, but let\'s meet up when I get back! :)', user: PROG2053Models.rk, photo_id: PROG2053Models.photo7._id
	};

	static comment8 = {
		_id: '57231f1a30e4351f4e9f4bf0',
		date_time: '2010-09-06 13:59:33',
		comment: 'Made a new friend today! Well, they followed me ' +
		'home, anyway.', user: PROG2053Models.rk, photo_id: PROG2053Models.photo8._id
	};

	static comment9 = {
		_id: '57231f1a30e4351f4e9f4bf1',
		date_time: '2008-10-16 18:04:55',
		comment: 'Wouldn\'t get anywhere without this beauty! ' +
		'Completely built from scraps by hand, but she goes at top ' +
		'speeds that\'ll rival any First Order piece of junk.', user: PROG2053Models.rk, photo_id: PROG2053Models.photo12._id
	};

	static comment10 = {
		_id: '57231f1a30e4351f4e9f4bf2',
		date_time: '2013-12-04 13:12:00',
		comment: 'What do you mean you haven\'t heard of second ' +
		'breakfast?', user: PROG2053Models.pt, photo_id: PROG2053Models.photo10._id
	};

	static comment11 = {
		_id: '57231f1a30e4351f4e9f4bf3',
		date_time: '2013-09-04 10:14:32',
		comment: 'Beautiful yet cold and aloof. Loner. Does not obey, ' +
		'occasionally chooses to cooperate. ', user: PROG2053Models.al, photo_id: PROG2053Models.photo11._id
	};

	static comment12 = {
		_id: '57231f1a30e4351f4e9f4bf4',
		date_time: '2016-01-04 2:00:01',
		comment: 'Which one are you?', user: PROG2053Models.al, photo_id: PROG2053Models.photo9._id
	};

	static comment13 = {
		_id: '57231f1a30e4351f4e9f4bf5',
		date_time: '2016-01-04 2:04:01',
		comment: 'The tall one.', user: PROG2053Models.pt, photo_id: PROG2053Models.photo9._id
	};

	static comments = [
		PROG2053Models.comment1,
		PROG2053Models.comment2,
		PROG2053Models.comment3,
		PROG2053Models.comment4,
		PROG2053Models.comment5,
		PROG2053Models.comment6,
		PROG2053Models.comment7,
		PROG2053Models.comment8,
		PROG2053Models.comment9,
		PROG2053Models.comment10,
		PROG2053Models.comment11,
		PROG2053Models.comment12,
		PROG2053Models.comment13
	];

	static populatedPhotoComments = false;

	static userListModel = () => {
		return PROG2053Models.users;
	};

	static userModel = (userId) => {
		for (let i = 0; i < PROG2053Models.users.length; i++) {
			if (PROG2053Models.users[i]._id === userId) {
				return PROG2053Models.users[i];
			}
		}
		return null;
	};

	static photoOfUserModel = (userId) => {
		return PROG2053Models.photos.filter(function (photo) {
			return (photo.user_id === userId);
		});
	};

	static schemaModel = () => {
		return PROG2053Models.schemaInfo;
	};

	static populatePhotoComments = () => {
		PROG2053Models.populatedPhotoComments = true;
		PROG2053Models.comments.forEach(function (comment) {
			const photo = PROG2053Models.photos.filter(function (photo) {
				return (photo._id === comment.photo_id);
			})[0]; //only one match. return the content of the match inside the array

			if (!photo.comments) {
				photo.comments = [];
			}
			photo.comments.push(comment);
		});
	};
}

PROG2053Models.populatePhotoComments();

export default PROG2053Models;
