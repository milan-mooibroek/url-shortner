# Url Shortner
Basic Url Shortner. Create and delete shortcuts for urls.

## Installation

### Step one

Make sure to use basic authentication in the .env file in the root directory of this project.

`HTACCESS_API_USER="username"`
`HTACCESS_API_PASS="password"`

Run: `npm i && npm start`

### Step two

You can now post urls to http://localhost:3000/urls/create.
send a valid web url with body name `url`.

### Step three

Visit the url. The url will be your domain path and after that the hash http://localhost:3000/:hash. 

(For example the first record is http://localhost:3000/a )

### Step four

Remove the url with the `removeId` that is given back in the create call. 
The body field name is `remove_id` to the url http://localhost:3000/urls/delete.
