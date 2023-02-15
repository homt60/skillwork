<?php
require 'users.php';

$username = $_POST['login'] ?? null;
$password = $_POST['password'] ?? null;



if ($_POST['exit']==1){
    // Стартуем сессию:
    session_start(); 
            
    // Пишем в сессию информацию о том, что мы авторизовались:
    $_SESSION['auth'] = false; 
    $_SESSION['password'] = null;
}


function getUsersList($list){
    $list["admin"]["password"] = sha1($list["admin"]["password"]);
    
    for ($i = 0; $i <= count($list)-2; $i++) {
        $list[$i]["password"] = sha1($list[$i]["password"]);
       
    }
    
    return $list;
}

function existsUser($login, $array){
    if ($array["admin"]["login"] == $login) {return 'admin';}

    for ($i = 0; $i <= count($array)-1; $i++) {
        if ($array[$i]["login"] == $login) {return $i;}
    }
    return false;
}

function getCurrentUser(){
    if($_SESSION['auth']){return $_SESSION['login'];}
}

if (null !== $username || null !== $password) {
    
    // Если пароль из базы совпадает с паролем из формы
    if ($password === $users['admin']['password'] and $username === $users['admin']['login']) {

        
        // Стартуем сессию:
        session_start(); 
        
        // Пишем в сессию информацию о том, что мы авторизовались:
        $_SESSION['auth'] = true; 
            
        // Пишем в сессию логин и id пользователя
        $_SESSION['admin']['id'] = 'admin';
        $_SESSION['login'] = $username; 

    }
    for ($i = 0; $i<=count($users)-2; $i++){
        if($users[$i]["login"] === $username and $users[$i]["password"] === $password){     
            
            if($users[$i]['discount']==null){
                
                $users[$i]['discount'] = time() + 86400;
            
                //$f = fopen("./modules/users.php", "a+"); // Открываем файл в режиме записи при этом указатель сдвигается на  последний байт файла
                //    fwrite($f, "Привет!!!"); // Запись в файл

                //fclose($f); //Закрываем файл
            }


            ////////////////////////////////
           ///     Стартуем сессию:     ///
          ////////////////////////////////
            session_start(); 
            
            // Пишем в сессию информацию о том, что мы авторизовались:
            $_SESSION['auth'] = true; 
            $_SESSION[$i]['id'] = $i;    
            // Пишем в сессию логин пользователя
            $_SESSION['login'] = $username; 
        }
    } 
}

    
$auth = $_SESSION['auth'] ?? null;

//Если не авторизован
if(!$auth) { ?>
    <!DOCTYPE html>
    <html>
    <body>

        <form method="post" action="welcome.php" align="center">
            <input align="center" name="login" type="text" placeholder="Логин"><br>
            <input align="center" name="password" type="password" placeholder="Пароль"><br>
            <input align="center" name="submit" type="submit" value="Войти"><br>
        </form>

    </body>
    </html>
  
  <?php }

// если авторизованы
if ($auth and $_SESSION['login']=='1') {
?>
    <h1>Контент для администратора</h1>
    
    <a href="welcome.php">Выход</a>
<?php }

elseif ($auth and $_SESSION['login']!='admin') {
    
    ?>
    <head>
        <title><?php echo $_SESSION['login']; ?></title>
    </head>
    <body>
        <a href="welcome.php?exit=1">Выход</a>
        <h1><center>контент для простых смертных</center></h1>
        <h2><center>Приведи друга и получи абонемент на день</center>
        <h2><center>Абонемент на день</center></h2>
        <h3><center>В абонемент входит</center></h3>
        <p><center>- Адская баня</center></p>
        <p><center>- Райская сауна</center></p>
        <p><center>- Массаж от master</center></p>
        <p><center>Цена 300$</center></p>
    </body>
        
        <?php
            $time = $users[existsUser($_SESSION['login'], $users)]['discount']-time();
            echo $time."putin ";
            if ($time>0){
                
                echo $time;
            }

        ?></h2>
        <img src="Massage_therapist-pana.svg" width="50%" height="50%">
        <br>
        
        
    <?php }
