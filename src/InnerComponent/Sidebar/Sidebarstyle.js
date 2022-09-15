import style, {css} from "styled-components";

function Sidebarstyle ()
{
    return css`
    .sidebar .nav-item.dropdown .dropdown-toggle::after,
    .topbar .nav-item.dropdown .dropdown-toggle::after {
        width: 1rem;
        text-align: center;
        float: right;
        vertical-align: 0;
        border: 0;
        font-weight: 900;
        content: '\f105';
        font-family: 'Font Awesome 5 Free'
    }
    
    .sidebar .nav-item.dropdown.show .dropdown-toggle::after,
    .topbar .nav-item.dropdown.show .dropdown-toggle::after {
        content: '\f107'
    }
    
    .sidebar .nav-item .nav-link,
    .topbar .nav-item .nav-link {
        position: relative
    }
    
    .sidebar .nav-item .nav-link .badge-counter,
    .topbar .nav-item .nav-link .badge-counter {
        position: absolute;
        transform: scale(.7);
        transform-origin: top right;
        right: .25rem;
        margin-top: -.25rem
    }
    
    .sidebar .nav-item .nav-link .img-profile,
    .topbar .nav-item .nav-link .img-profile {
        height: 3rem;
        width: 3rem
    }
    
    .si_bar_logo img{
        display: block;
        width: 75px;
    }
    .sidebar {
        width: 6.5rem;
        min-height: 100vh;
        border-radius: 0px 35px 35px 0px;
    }
    
    .sidebar .nav-item {
        position: relative
    }
    
    .sidebar .nav-item:last-child {
        margin-bottom: 1rem
    }
    
    .sidebar .nav-item .nav-link {
        text-align: center;
        padding: .75rem 1rem;
        width: 6.5rem
    }
    
    .sidebar .nav-item .nav-link span {
        font-size: .65rem;
        display:block ;
    }
    
    
    .sidebar .nav-item.active .nav-link {
        font-weight: 700
    }
    
    .sidebar .nav-item .collapse {
        position: absolute;
        left: calc(6.5rem + 1.5rem / 2);
        z-index: 1;
        top: 2px
    }
    
    .sidebar .nav-item .collapse .collapse-inner {
        border-radius: .35rem;
        box-shadow: 0 .15rem 1.75rem 0 rgba(58, 59, 69, .15)
    }
    
    .sidebar .nav-item .collapsing {
        display: none;
        transition: none
    }
    
    .sidebar .nav-item .collapse .collapse-inner,
    .sidebar .nav-item .collapsing .collapse-inner {
        padding: .5rem 0;
        min-width: 10rem;
        font-size: .85rem;
        margin: 0 0 1rem 0
    }
    
    .sidebar .nav-item .collapse .collapse-inner .collapse-header,
    .sidebar .nav-item .collapsing .collapse-inner .collapse-header {
        margin: 0;
        white-space: nowrap;
        padding: .5rem 1.5rem;
        text-transform: uppercase;
        font-weight: 800;
        font-size: .65rem;
        color: #b7b9cc
    }
    
    .sidebar .nav-item .collapse .collapse-inner .collapse-item,
    .sidebar .nav-item .collapsing .collapse-inner .collapse-item {
        padding: .5rem 1rem;
        margin: 0 .5rem;
        display: block;
        color: #3a3b45;
        text-decoration: none;
        border-radius: .35rem;
        white-space: nowrap
    }
    
    .sidebar .nav-item .collapse .collapse-inner .collapse-item:hover,
    .sidebar .nav-item .collapsing .collapse-inner .collapse-item:hover {
        background-color: #eaecf4
    }
    
    .sidebar .nav-item .collapse .collapse-inner .collapse-item:active,
    .sidebar .nav-item .collapsing .collapse-inner .collapse-item:active {
        background-color: #dddfeb
    }
    
    .sidebar .nav-item .collapse .collapse-inner .collapse-item.active,
    .sidebar .nav-item .collapsing .collapse-inner .collapse-item.active {
        color: #ff8000;
        font-weight: 700
    }
    
    .sidebar #sidebarToggle {
        width: 2.5rem;
        height: 2.5rem;
        text-align: center;
        margin-bottom: 1rem;
        cursor: pointer
    }
    
    /* .sidebar #sidebarToggle::after {
        font-weight: 900;
        content: '\f104';
        font-family: 'Font Awesome 5 Free';
        margin-right: .1rem
    } */
    
    .sidebar #sidebarToggle:hover {
        text-decoration: none
    }
    
    .sidebar #sidebarToggle:focus {
        outline: 0
    }
    
    .sidebar.toggled {
        width: 0!important;
        overflow: hidden
    }
    
    .sidebar.toggled #sidebarToggle::after {
        content: '\f105';
        font-family: 'Font Awesome 5 Free';
        margin-left: .25rem
    }
    
    .sidebar.toggled .sidebar-card {
        display: none;
    }
    
    .sidebar .sidebar-brand {
        font-family: Brush Script Std;
        height: 4.375rem;
        text-decoration: none;
        font-size:36px;
        font-weight: 400;
        padding: 1.5rem 1rem;
        text-align: center;
        letter-spacing: .05rem;
        z-index: 1
    }
    
    .sidebar .sidebar-brand .sidebar-brand-icon {
        font-size: 2rem;
        display: none;  
    }
    
    .sidebar .sidebar-brand .sidebar-brand-text {
        display: none;
    }
    
    .sidebar hr.sidebar-divider {
        margin: 0 1rem 1rem
    }
    
    .sidebar .sidebar-heading {
        text-align: center;
        padding: 0 1rem;
        font-weight: 800;
        font-size: .65rem
    }
    
    .sidebar .sidebar-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: .875rem;
        border-radius: .35rem;
        color: rgba(255, 255, 255, .8);
        margin-left: 1rem;
        margin-right: 1rem;
        margin-bottom: 1rem;
        padding: 1rem;
        background-color: rgba(0, 0, 0, .1)
    }
    
    .sidebar .sidebar-card .sidebar-card-illustration {
        height: 3rem;
        display: block
    }
    
    .sidebar .sidebar-card .sidebar-card-title {
        font-weight: 700
    }
    
    .sidebar .sidebar-card p {
        font-size: .75rem;
        color: rgba(255, 255, 255, .5)
    }
    
    @media (min-width:768px) {
        .sidebar .nav-item .nav-link span {
            font-size: 16px;
            display: inline
        }
        .sidebar {
            width: 14rem!important
        }
        .sidebar .nav-item .collapse {
            position: relative;
            left: 0;
            z-index: 1;
            top: 0;
            -webkit-animation: none;
            animation: none
        }
        .sidebar .nav-item .collapse .collapse-inner {
            border-radius: 0;
            box-shadow: none
        }
        .sidebar .nav-item .collapsing {
            display: block;
            transition: height .15s ease
        }
        .sidebar .nav-item .collapse,
        .sidebar .nav-item .collapsing {
            margin: 0 1rem
        }
        .sidebar .nav-item .nav-link {
            display: inline-block;
            width: 100%;
            text-align: left;
            padding: 1rem;
            width: 14rem
        }
        .sidebar .nav-item .nav-link i {
            font-size: 19px;
            margin-right: .25rem
        }
        .sidebar .nav-item .nav-link span {
            font-size: 16px;
            display: inline
        }
        .sidebar .nav-item .nav-link[data-toggle=collapse]::after {
            width: 1rem;
            text-align: center;
            float: right;
            vertical-align: 0;
            border: 0;
            font-weight: 900;
            content: '\f107';
            font-family: 'Font Awesome 5 Free'
        }
        .sidebar .nav-item .nav-link[data-toggle=collapse].collapsed::after {
            content: '\f105'
        }
        .sidebar .sidebar-brand .sidebar-brand-icon i {
            font-size: 2rem
        }
        .sidebar .sidebar-brand .sidebar-brand-text {
            display: inline;
            font-family: Brush Script Std;
        }
        .sidebar.toggled .sidebar-brand .sidebar-brand-short{
            display: block;
            font-family: Brush Script Std;
    
        }
        .sidebar .sidebar-brand .sidebar-brand-short {
            display: inline;
            font-family: Brush Script Std;
            display: none;
        }
        .sidebar .sidebar-heading {
            text-align: left
        }
        .sidebar.toggled {
            overflow: visible;
            width: 6.5rem!important
        }
        .sidebar.toggled .nav-item .collapse {
            position: absolute;
            left: calc(6.5rem + 1.5rem / 2);
            z-index: 1;
            top: 2px;
            -webkit-animation-name: growIn;
            animation-name: growIn;
            -webkit-animation-duration: .2s;
            animation-duration: .2s;
            -webkit-animation-timing-function: transform cubic-bezier(.18, 1.25, .4, 1), opacity cubic-bezier(0, 1, .4, 1);
            animation-timing-function: transform cubic-bezier(.18, 1.25, .4, 1), opacity cubic-bezier(0, 1, .4, 1)
        }
        .sidebar.toggled .nav-item .collapse .collapse-inner {
            box-shadow: 0 .15rem 1.75rem 0 rgba(58, 59, 69, .15);
            border-radius: .35rem
        }
        .sidebar.toggled .nav-item .collapsing {
            display: none;
            transition: none
        }
        .sidebar.toggled .nav-item .collapse,
        .sidebar.toggled .nav-item .collapsing {
            margin: 0
        }
        .sidebar.toggled .nav-item:last-child {
            margin-bottom: 1rem
        }
        .sidebar.toggled .nav-item .nav-link {
            text-align: center;
            padding: .75rem 1rem;
            width: 6.5rem
        }
        .sidebar.toggled .nav-item .nav-link span {
            font-size: .65rem;
            display: block;
        }
        .sidebar.toggled .nav-item .nav-link .colapse_tog{
            font-size: .65rem;
            display: block;
            display:none !important;
        }
        .sidebar.toggled .nav-item .nav-link i {
            margin-right: 0
        }
        .sidebar.toggled .nav-item .nav-link[data-toggle=collapse]::after {
            display: none
        }
        .sidebar.toggled .sidebar-brand .sidebar-brand-icon i {
            font-size: 2rem
        }
        .sidebar.toggled .sidebar-brand .sidebar-brand-text {
            display: none
        }
        .sidebar.toggled .sidebar-heading {
            text-align: center
        }
    }
    
    .sidebar-light .sidebar-brand {
        color: #6e707e
    }
    
    .sidebar-light hr.sidebar-divider {
        border-top: 1px solid #eaecf4
    }
    
    .sidebar-light .sidebar-heading {
        color: #b7b9cc
    }
    
    .sidebar-light .nav-item .nav-link {
        color: #858796
    }
    
    .sidebar-light .nav-item .nav-link i {
        color: #d1d3e2
    }
    
    .sidebar-light .nav-item .nav-link:active,
    .sidebar-light .nav-item .nav-link:focus,
    .sidebar-light .nav-item .nav-link:hover {
        color: #6e707e
    }
    
    .sidebar-light .nav-item .nav-link:active i,
    .sidebar-light .nav-item .nav-link:focus i,
    .sidebar-light .nav-item .nav-link:hover i {
        color: #6e707e
    }
    
    .sidebar-light .nav-item .nav-link[data-toggle=collapse]::after {
        color: #b7b9cc
    }
    
    .sidebar-light .nav-item.active .nav-link {
        color: #6e707e
    }
    
    .sidebar-light .nav-item.active .nav-link i {
        color: #6e707e
    }
    
    .sidebar-light #sidebarToggle {
        background-color: #eaecf4
    }
    
    .sidebar-light #sidebarToggle::after {
        color: #b7b9cc
    }
    
    .sidebar-light #sidebarToggle:hover {
        background-color: #dddfeb
    }
    
    .sidebar-dark .sidebar-brand {
        color: #fff
    }
    
    .sidebar-dark hr.sidebar-divider {
        border-top: 1px solid rgba(255, 255, 255, .15)
    }
    
    .sidebar-dark .sidebar-heading {
        color: rgba(255, 255, 255, .4)
    }
    
    .sidebar-dark .nav-item .nav-link {
        color: rgba(255, 255, 255, .8)
    }
    
    .sidebar-dark .nav-item .nav-link i {
        color: rgba(255, 255, 255, .3)
    }
    
    .sidebar-dark .nav-item .nav-link:active,
    .sidebar-dark .nav-item .nav-link:focus,
    .sidebar-dark .nav-item .nav-link:hover {
        color: #fff
    }
    
    .sidebar-dark .nav-item .nav-link:active i,
    .sidebar-dark .nav-item .nav-link:focus i,
    .sidebar-dark .nav-item .nav-link:hover i {
        color: #fff
    }
    
    .sidebar-dark .nav-item .nav-link[data-toggle=collapse]::after {
        color: rgba(255, 255, 255, .5)
    }
    
    .sidebar-dark .nav-item.active .nav-link {
        color: #fff
    }
    
    .sidebar-dark .nav-item.active .nav-link i {
        color: #fff
    }
    
    .sidebar-dark #sidebarToggle {
        background-color: transparent;
    }
    
    .sidebar-dark #sidebarToggle::after {
        color: rgba(255, 255, 255, .5);
        font-size: 24px;
        
    }
    
    .sidebar-dark #sidebarToggle:hover {
        background-color: none;
    }
    
    .sidebar-dark.toggled #sidebarToggle::after {
        color: rgba(255, 255, 255, .5)
    }
    body.sidebar-toggled footer.sticky-footer {
        width: 100%
    }
`;
    
}

export const SidebarstyleWrapperStyled = style.div`
${Sidebarstyle};
`;