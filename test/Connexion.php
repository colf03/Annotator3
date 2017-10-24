<?php
require_once 'User.php';

class Connexion {
	
	private $isConnecte;
	private User $user;
	
	public function __construct() {
	
		$this->isConnecte=false;
		$this->user=null;
	
	}
	
	public function connecter(User $user) {
		$this->isConnecte=true;
		$this->user=$user;
		if($this->user->getMdp()== "default"){
			
			$this->isConnecte=false;
		}
		return($this->isConnecte);
	}
	
	public function fermerConnexion(){
		$this->isConnecte=false;
		$this->user=null;
		
	}
	
	public function getIsConnecte() {
	
		return ($this->isConnecte);
	}
	
	public function getUser() {
	
		return ($this->user);
	}
	
	
	
	
	
}

?>