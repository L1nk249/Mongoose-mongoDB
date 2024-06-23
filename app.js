
require('./models/connection')

const Article = require('./models/articles');

const User= require ('./models/users')

const Order=require('./models/orders')




/*
** Articles
*/

function displayAllArticles() {
	Article.find().then(data => {
		console.log('ARTICLES =>', data);
	});
}

function displayArticleByName(articleName) {
	Article.findOne({ name: articleName }).then(data => {
		console.log('ARTICLE =>', data);
	});
}

function displayArticleByID(articleId) {
	Article.findById(articleId).then(data => {
		console.log('ARTICLE =>', data);
	});
}

function updateArticlePrice(articleId, newPrice) {
	Article.updateOne({ _id: articleId }, { price: newPrice }).then(() => {
		console.log(`Price updated for ${articleId}`);
	});
}

function updateArticleStock(articleId, newStock) {
	Article.updateOne({ _id: articleId }, { stock: newStock }).then(() => {
		console.log(`Stock updated for ${articleId}`);
	});
}

function resetStocks() {
	Article.updateMany({}, { stock: 0 }).then(() => {
		console.log(`Stocks successfully reset`);
	});
}


/*
** Users
*/

function displayAllUsers() { 
	User.find().then(data => {
		console.log('USER =>', data);
	});
}
displayAllUsers()




function deleteUser(userId) 
{User.deleteOne({_id:userId}).then(data => {
	console.log('USER =>', data);
}); }

deleteUser ('667544ceb502885e5ddc0ad9')


/*
** Orders
*/

function displayAllOrders() { 
	Order.find().then(data => {
		console.log('Order =>', data);
	});
}
displayAllOrders()



function updateOrderPaymentStatus(orderId, isPaid) { 
	Order.updateOne({ _id: orderId }, { isPaid }).then(() => {
		console.log(`ok`)});

}
updateOrderPaymentStatus('667544e2b502885e5ddc0ae4',false   )



function deleteOrder(orderId) { 
	Order.deleteOne({_id:orderId}).then(data => {
		console.log('order =>', data);
	}); 
}
deleteOrder('667544e2b502885e5ddc0ae6')

// Do not edit/remove code under this line
module.exports = {
	displayAllArticles,
	displayArticleByName,
	displayArticleByID,
	updateArticlePrice,
	updateArticleStock,
	resetStocks,
	displayAllUsers,
	deleteUser,
	displayAllOrders,
	updateOrderPaymentStatus,
	deleteOrder,
};
