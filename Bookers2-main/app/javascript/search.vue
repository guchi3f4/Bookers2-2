<template>
  <div>
    <!--<div id="books_json" data-json="<%= @books.to_json %>"></div>-->
    <input type="text" @input="onInput" name="content" v-model="keyword" class="mb-2" data-remote='true'>
    <input type="button" name="commit" value="検索" class="btn btn-primary" data-disable-with="検索" id="title-search">
    <!--<div v-for="book in filteredBooks">-->
  <!--  <div v-for="book in books" :key="book.id">-->
  <!--    <div class="container mb-3 py-3 rounded book-item">-->
  <!--      <div class="row border-bottom pb-2 align-items-center">-->
  <!--        <div class="col-md-2 col-4">-->
  <!--          <img v-bind:src="'/attachments/efa53ba11a50e0ba057bc9048ccf84b4245c9141/store/fill/50/50/' + book.profile +'/profile_image'">-->
  <!--        </div>-->
  <!--        <div class="col-md-2 col-6 text-break">-->
  <!--          {{book.title}}-->
  <!--        </div>-->
  <!--        <div class="col-md-2">-->
  <!--          <span class="d-inline-block d-md-none my-2 mr-1">category: </span>-->
  <!--          <div v-for="tag in book.tags">-->
  <!--            {{tag.tag_name}}-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        <div class="col-md-6 text-break">-->
  <!--          {{book.body}}-->
  <!--        </div>-->
  <!--      </div>-->
  <!--      <div class="row py-2">-->
  <!--        <div class="col-md-2 favorite-btn<%= book.id %>">-->
  <!--        </div>-->

  <!--        <div class="col-md-3">-->
  <!--          コメントの数: {{book.comment}}-->
  <!--        </div>-->
  <!--        <div class="col-md-3">-->
  <!--          閲覧数: {{book.book_count}}-->
  <!--        </div>-->

          <!--<div class="col-md-4" id="star_evaluation_<%= book.id %>">-->
          <!--  <script>-->
          <!--  $('#star_evaluation_<%= book.id %>').empty();-->
          <!--  $('#star_evaluation_<%= book.id %>').raty({-->
          <!--    size     : 36,-->
          <!--    starOff:  '<%= asset_path('star-off.png') %>',-->
          <!--    starOn : '<%= asset_path('star-on.png') %>',-->
          <!--    starHalf: '<%= asset_path('star-half.png') %>',-->
          <!--    half: true,-->
          <!--    readOnly: true,-->
          <!--    score: <%= book.evaluation %>-->
          <!--  });-->
          <!--  </script>-->
          <!--</div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
  </div>
</template>

<script>
  import axios from 'axios';
  export default ({
    data: function() {
      return {
        keyword: '',
        books: '',
        title: '',
      }
    },

    // mounted: function() {
    //   this.setBook();
    // },

    methods: {
      // setBook: function () {
      //   axios.get('/api/books')
      //   .then(response => {
      //     this.books = response.data;
      //   });
      // },

      onInput({target}){
        this.keyword = target.value
        document.getElementById('title-search').click();
      },
    }
  })
</script>