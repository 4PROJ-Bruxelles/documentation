# Admin

This section will explain how the admin panels work and how to use them.

## Articles panel

This panel is dedicated to the management of articles, you can modify their informations and also delete them. The datatable will display usefull informations, such as the price or the available stock of the item.

To create a new article, simply clic "**New Article**". To modify or delete an article, buttons are located at the right side of each row.

<img :src="$withBase('/articles/table.png')" alt="Articles table">


The following form is used to create an item, but the structure will stay the same for the form used to modify one, all informations are required and must follow certain rules to allow the creation of a new article.

<img :src="$withBase('/articles/form.png')" alt="Article form">


## Categories panel

This panel is dedicated to the management of categories, you can modify their name and parent and also delete them. The datatable will display the name of the category and it's parent's Id.

To create a new category, simply clic "**New Category**". To modify or delete a category, buttons are located at the right side of each row.

<img :src="$withBase('/categories/table.png')" alt="Categories table">


The following form is used to create a category, but the structure will stay the same for the form used to modify one, a name is always required but not the parent category.

<img :src="$withBase('/categories/form.png')" alt="Category form">


## Users panel

This panel is dedicated to the management of users, you can modify their informations and also delete them. The datatable will display usefull informations.

To create a new article, simply clic "**New User**". To modify or delete an user, buttons are located at the right side of each row.

<img :src="$withBase('/users/table.png')" alt="Users table">


The following form is used to create a user, but the structure will stay the same for the form used to modify one, all informations except the address are required and must follow certain rules to allow the creation of a new user.

<img :src="$withBase('/users/form.png')" alt="User form">

## Transactions panel

The transaction panel is a bit special, depending if you are logged as a user or as an administrator, the informations displayed won't be the same. The administrator has access to every transactions made by any user. The normal user only has acces to his own transactions.

<img :src="$withBase('/transactions/table.png')" alt="Transactions table">
