import React from "react";
import styled from 'styled-components';


function SearchBar() {
    return (
        <div class="row">
            <div class="col-12 col-md-10 col-lg-8">
                <form class="card card-sm">
                    <div class="card-body row no-gutters align-items-center">
                        <div class="col-auto">
                            <i class="fa fa-search h4 text-body"></i>
                        </div>
                        <div class="col">
                            <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords"></input>
                        </div>
                        <div class="col-auto">
                            <button class="btn btn-lg btn-success" type="submit">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default SearchBar;