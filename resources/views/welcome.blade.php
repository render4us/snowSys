@extends( 'layout.base' )

@section( 'layout.base.body' )
    <div id="page-container" class="h-full w-full flex">
        <div class="container flex-auto flex-col items-center justify-center flex m-4 sm:mx-auto">
            <div class="flex justify-center items-center py-6">
                <img class="w-32" src="{{ asset( 'svg/nexopos-variant-1.svg' ) }}" alt="NexoPOS">
            </div>
            <div class="logo py-4 flex justify-center items-center">
                @if ( ns()->option->get( 'ns_store_rectangle_logo' ) )
                    <img src="{{ ns()->option->get( 'ns_store_rectangle_logo' ) }}" class="w-11/12" alt="logo"/>
                @else
                    <h1 class="font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-indigo-400 text-3xl">SnowSys </h1>
                @endif
            </div>
            <div class="ns-box rounded shadow w-full md:w-1/2 lg:w-1/3 overflow-hidden">
                <div class="ns-box-footer flex shadow border-t">
                    <div class="flex w-1/3"><a class="link text-sm w-full py-2 text-center" href="{{ ns()->route( 'ns.dashboard.home' ) }}">{{ __( 'Dashboard' ) }}</a></div>
                    <div class="flex w-1/3"><a class="link text-sm w-full py-2 text-center" href="{{ ns()->route( 'ns.login' ) }}">{{ __( 'Sign In' ) }}</a></div>
                    <div class="flex w-1/3"><a class="link text-sm w-full py-2 text-center" href="{{ ns()->route( 'ns.register' ) }}">{{ __( 'Sign Up' ) }}</a></div>
                </div>
            </div>
        </div>
    </div>
@endsection
