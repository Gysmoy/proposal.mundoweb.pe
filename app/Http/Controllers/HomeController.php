<?php

namespace App\Http\Controllers;

use App\Models\Aboutus;
use App\Models\Indicator;
use App\Models\Item;
use App\Models\Post;
use App\Models\Slider;
use App\Models\Testimony;
use Illuminate\Http\Request;

class HomeController extends BasicController
{
    public $reactView = 'Home';
    public $reactRootView = 'public';
}
