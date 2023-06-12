<script></script>

<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../../pic/test.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="../../pic/test2.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="../../pic/test3.jpg" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <div class="top-product">
        <h2>熱賣商品</h2>
    </div>
</template>

<style lang="scss" scoped>
#carouselExampleIndicators{
    width: 100%;
}

.carousel-item {
    img {
        height: 300px;
    }
}
.top-product{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>