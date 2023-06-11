<?php

namespace App\Http\Livewire\Auth;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Livewire\Component;

class Login extends Component
{

    public $emailOrnumber;
    public $isTrue = false;
    public $password;

    public function verifiyMail()
    {

        $this->validate([
            'emailOrnumber' => 'required|email'
        ]);

        $this->isTrue = User::where('email', '=', $this->emailOrnumber)->exists();

        if (!$this->isTrue) {

            $this->addError('email', 'L\' email fournis n\' existe pas');
        };




        //$user=User::where('')
    }


    public function loginUser()
    {
        $this->validate([
            'emailOrnumber' => 'required',
            'password' => 'required',
        ]);

        if ($this->isTrue) {
            $user = User::where('email', '=', $this->emailOrnumber)->first();


            if ($user && Hash::check($this->password, $user->password)) {
                Auth::login($user);

                return redirect('/dashboard');
            } else {
                $this->addError('password', 'Le mot de passe est incorrect');
            }
        }
    }

    public function connect()
    {

        $this->validate([
            'emailOrnumber' => 'required|email',
            'password' => 'required',
        ]);


        if (!$this->isTrue) {

            $user = User::where('email', '=', $this->emailOrnumber)->where('password', '=', $this->password);


            Auth::login($finduser);
        } else {
        };
    }



    public function render()
    {
        return view('livewire.auth.login');
    }
}
