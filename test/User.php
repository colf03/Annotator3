<?php


class User {
	
	private $id;
	private $mdp;
	private $rang; // correspond au type de compte ( 1:admin, 2:annotateur)
	
	public function __construct() {
	
		$this->id="default";
		$this->mdp="default";
		$this->rang=-1;
	
	}
	
	public function __construct($id,$mdp,$type) {
	
		$this->id=$id;
		$this->mdp=$mdp;
		$this->rang=$type;
	
	}
	
	public function getId() {
	
		return ($this->id);
	}
	
	public function getMdp() {
	
		return ($this->mdp);
	}
	
	public function getRang() {
	
		return ($this->rang);
	}
	
	
	
	
	
}

?>