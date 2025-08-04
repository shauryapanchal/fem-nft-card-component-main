nftImage = document.querySelector('.nft-preview-image');
viewIcon = document.querySelector('.view-icon');
imageWrapper = document.querySelector('.image-wrapper');
imageWrapper.addEventListener('mouseenter', function(){
    viewIcon.style.display = 'block';
    viewIcon.style.zIndex = '1';
});
viewIcon.addEventListener('mouseenter', function(){
    nftImage.style.opacity = '0.5';
});
imageWrapper.addEventListener('mouseleave', function(){
    viewIcon.style.display = 'none';
});