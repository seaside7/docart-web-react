import React from 'react'
import {IndexLink, Link} from 'react-router'
import './Header.scss'

class Header extends React.Component {
    componentDidMount() {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 60) {
                $(".navbar-custom").addClass("navbar-fixed-top");
            } else {
                $(".navbar-custom").removeClass("navbar-fixed-top");
            }
        });
    }
    
    render() {
        return (
            <nav class="navbar navbar-custom">
                <div class="container">
                    <div class="navbar-header">
                        {/* < Brand and toggle get grouped for better mobile display */}
                        <button
                            type="button"
                            class="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#navbar-collapse"
                            aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="./"><img src="img/logo-white.png"/></a>
                    </div>

                    <div class="collapse navbar-collapse" id="navbar-collapse">
                        <form class="navbar-form navbar-left" method="" action="">
                            <div class="input-group">
                                <div class="input-group-btn">
                                    <select class="btn btn-default dropdown-toggle">
                                        <option>Ketegori</option>
                                        <option>Sayuran</option>
                                        <option>Buah-buahan</option>
                                        <option>Paket</option>
                                    </select>
                                </div>

                                <input type="text" class="form-control" placeholder="Search for..."/>
                                <span class="input-group-btn">
                                    <button class="btn btn-warning" type="button">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </span>
                            </div>
                        </form>
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <a href="login.html">Login</a>
                            </li>
                            <li>
                                <a href="register.html">Daftar</a>
                            </li>
                            <li>
                                <a href="register.html">Bantuan</a>
                            </li>
                            <li class="dropdown">
                                <a
                                    href="#"
                                    class="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    <img src="img/cart-btn.png"/>
                                    <span class="caret"></span>
                                </a>
                                <div
                                    class="dropdown-menu"
                                    style={{
                                    minWidth: '290px',
                                    width: '100%'
                                }}>
                                    <form action="" method="">
                                        <div class="col-md-12">
                                            <div class="text-center">
                                                <strong>2 Produk dikeranjang</strong>
                                            </div>
                                            <div class="box-cart">
                                                <div class="fl">
                                                    <img width="40" height="40" src="images/product/thumb.jpg"/>
                                                </div>
                                                <div class="fl">
                                                    <span class="nama-produk">Apel</span><br/>
                                                    <span>10 Kg</span>
                                                </div>
                                            </div>
                                            <div class="box-cart">
                                                <div class="fl">
                                                    <img width="40" height="40" src="images/product/thumb.jpg"/>
                                                </div>
                                                <div class="fl">
                                                    <span class="nama-produk">Apel Merah Malang</span><br/>
                                                    <span>20 Kg</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <button type="button" class="btn btn-block btn-warning">PROSES PESANAN INI</button>
                                        </div>
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header