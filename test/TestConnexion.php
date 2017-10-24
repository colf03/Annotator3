<?php

require 'vendor/autoload.php';
require_once 'Connexion.php';
require_once 'User.php';

class TestConnexion extends PHPUnit_Framework_TestCase {

	protected $connexion,$user;
	
	protected function setUp(){
		$this->user= new User();
	}
  
	protected function tearDown(){
		$this->user = null;
	}
	
	public static function setUpBeforeClass(){
		$this->connexion= new Connexion ();
	}
	
	public static function tearDownAfterClass(){
		$this->connexion= fermerConnexion ();
	}
  
	public function testUserAnnotateur(){
		$this->user=new User("Anot","Annotateur",2)
		$this->assertEquals(true, $this->connexion->connecter($user), "L'user doit pouvoir se connecter");
	
	}
	
	
	public function testUserAdmin(){
		$this->user=new User("Admin","Admin",1)
		$this->assertEquals(true, $this->connexion->connecter($user), "L'user doit pouvoir se connecter");
	
	}
	
	public function testUserInvalide(){
		$this->assertEquals(-1, $this->user->getRang(), "L'user n est pas valide");
		$this->assertEquals(false, $this->connexion->connecter($user), "L'user ne doit pas pouvoir se connecter");
	
	}
	
  
  
  
  
}

?>