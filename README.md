#### Custom Google Search Page
![Custom Google Search Page](Custom_StartPage/images/image.png)

#### Clock Js
![Clock](Clock/images/image.png)

#### Form Validation 
![Form Validation](Form_Registration/image/screenshot.png)

#### Form validation with Php and MySQL database
<i>Note: Change the table_name to your own table in MySQL database</i>
```bash
<!-- home.php -->
$select_query = "SELECT * FROM ==table_name== WHERE name = :username AND password = :password";
```
```bash
<!-- signup.php -->
$insert_query = "INSERT INTO ==table_name==(name, password, address) VALUES (:username, :password, :address)";
```

#### Ajax Search 
![Ajax](Ajax/images/screenshot.png)

```bash
<!-- server.php -->
$select_query = "SELECT username, address, contact FROM table_name WHERE username LIKE '%".$_GET['search']."%'";
```