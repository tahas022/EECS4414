import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num_video_views: 0,
      num_uploads: 0,
      num_video_views_rank: 0,
      num_country_rank: 0,
      num_channel_type_rank: 0,
      num_video_views_for_the_last_30_days: 0,
      num_lowest_monthly_earnings: 0,
      num_highest_monthly_earnings: 0,
      num_lowest_yearly_earnings: 0,
      num_highest_yearly_earnings: 0,
      num_subscribers_for_last_30_days: 0,
      num_created_year: 0,
      num_Gross_tertiary_education_enrollment: 29,
      num_Population: 0,
      num_Unemployment_rate: 0,
      num_Urban_population: 0,
      cat_category_Auto: 0,
      cat_category_Comedy: 0,
      cat_category_Education: 0,
      cat_category_Entertainment: 0,
      cat_category_Film_Animation: 0,
      cat_category_Gaming: 0,
      cat_category_Howto_Style: 0,
      cat_category_Movies: 0,
      cat_category_Music: 0,
      cat_category_News_Politics: 0,
      cat_category_Nonprofits_Activism: 0,
      cat_category_People_Blogs: 0,
      cat_category_Pets_Animals: 0,
      cat_category_Science_Technology: 0,
      cat_category_Shows: 0,
      cat_category_Sports: 0,
      cat_category_Trailers: 0,
      cat_category_Travel_Events: 0,
    };
  }

  handleNumericChange = (property, event) => {
    this.setState({ [property]: parseFloat(event.target.value) || 0 });
  }

  handleCategoryChange = (property, event) => {
    //Checks if the event is 0 or 1 
    const value = event.target.checked ? 1:0;
    this.setState({ [property]: value });
  }
  

  render() {
    return (
      <form>
        <label>
         
         <h1 id='title'>YouTube Channel's Subsriber Predictor</h1>
         <iframe src="https://giphy.com/embed/13Nc3xlO1kGg3S" width="480" height="270" frameBorder="0"  allowFullScreen></iframe><p><a href="https://giphy.com/gifs/new-youtube-logo-13Nc3xlO1kGg3S">via GIPHY</a></p>
          <br />
         
          <div>
          <label>Number of Views: </label>
          <input
            type="number"
            min={0}
            value={this.state.num_video_views}
            onChange={(e) => this.handleNumericChange('num_video_views', e)}
            />
          </div>
          
  

          <div>
          <label>Channel Type Rank: </label>
          <input
            type="number"
            min={1}
            value={this.state.num_channel_type_rank}
            onChange={(e) => this.handleNumericChange('num_channel_type_rank', e)}
          />
          </div>

          <div>
          <label>Number of Video Views for the last 30 Days: </label>
          <input
            type="number"
            min={0}
            value={this.state.num_video_views_for_the_last_30_days}
            onChange={(e) => this.handleNumericChange('num_video_views_for_the_last_30_days', e)}
          />
          </div>

          <div>
          <label>Number Subsribers for the last 30 Days: </label>
          <input
            type="number"
            min={0}
            value={this.state.num_subscribers_for_last_30_days}
            onChange={(e) => this.handleNumericChange('num_subscribers_for_last_30_days', e)}
          />
          </div>

          <div>
          <label>Year Channel was Created: </label>
          <input
            type="number"
            min={2005}
            max={2024}
            value={this.state.num_created_year}
            onChange={(e) => this.handleNumericChange('num_created_year', e)}
          />
          </div>
    
          <div>
          <label>Lowest Monthly Earnings: </label>
          <input
            type="number"
            min={0}
            value={this.state.num_lowest_monthly_earnings}
            onChange={(e) => this.handleNumericChange('num_lowest_monthly_earnings', e)}
          />
          </div>
          
          <div>
          <label>Highest Monthly Earnings: </label>
          <input
            type="number"
            min={0}
            value={this.state.num_highest_monthly_earnings}
            onChange={(e) => this.handleNumericChange('num_highest_monthly_earnings', e)}
          />
          </div>
      
          <div>
          <label>Lowest Yearly Earnings: </label>
          <input
            type="number"
            min={0}
            value={this.state.num_lowest_yearly_earnings}
            onChange={(e) => this.handleNumericChange('num_lowest_yearly_earnings', e)}
          />
          </div>

          <div>
          <label>Highest Yearly Earnings: </label>
          <input
            type="number"
            min={0}
            value={this.state.num_highest_yearly_earnings}
            onChange={(e) => this.handleNumericChange('num_highest_yearly_earnings', e)}
          />
          </div>
          



      {/*
      cat_category_Comedy: 0,
      cat_category_Education: 0,
      cat_category_Entertainment: 0,
      cat_category_Film_Animation: 0,
      cat_category_Gaming: 0,
      cat_category_Howto_Style: 0,
      cat_category_Movies: 0,
      cat_category_Music: 0,
      cat_category_News_Politics: 0,
      cat_category_Nonprofits_Activism: 0,
      cat_category_People_Blogs: 0,
      cat_category_Pets_Animals: 0,
      cat_category_Science_Technology: 0,
      cat_category_Shows: 0,
      cat_category_Sports: 0,
      cat_category_Trailers: 0,
      cat_category_Travel_Events: 0, */}






        </label>

        <br /><label>Category Properties:<br /></label><br />

    <input type='checkbox' 
    checked = {this.state.cat_category_Auto === 1}
    onChange={(event) => this.handleCategoryChange('cat_category_Auto', event)}/> Automotive

    <input 
    type='checkbox' 
    checked={this.state.cat_category_Comedy === 1} 
    onChange={() => this.handleCategoryChange('cat_category_Comedy', 
    this.state.cat_category_Comedy === 0 ? 1 : 0)} /> Comedy

    <input type='checkbox' 
    checked={this.state.cat_category_Education === 1} 
    onChange={() => this.handleCategoryChange('cat_category_Education', 
    this.state.cat_category_Education === 0 ? 1 : 0)} /> Education


    <input type='checkbox' 
    checked={this.state.cat_category_Entertainment === 1} 
    onChange={() => this.handleCategoryChange('cat_category_Entertainment', 
    this.state.cat_category_Entertainment === 0 ? 1 : 0)} /> Entertainment


    <input type='checkbox' 
    checked={this.state.cat_category_Film_Animation === 1} 
    onChange={() => this.handleCategoryChange('cat_category_Film_Animation', 
    this.state.cat_category_Film_Animation === 0 ? 1 : 0)} /> Film & Animation

    <input type='checkbox' 
    checked={this.state.cat_category_Gaming === 1} 
    onChange={() => this.handleCategoryChange('cat_category_Gaming', 
    this.state.cat_category_Gaming === 0 ? 1 : 0)} /> Gaming


    <input type='checkbox' 
    checked={this.state.cat_category_Howto_Style === 1} 
    onChange={() => this.handleCategoryChange('cat_category_Howto_Style', 
    this.state.cat_category_Howto_Style === 0 ? 1 : 0)} /> How to & Style



    <input type='checkbox' 
    checked={this.state.cat_category_Movies === 1} 
    onChange={() => this.handleCategoryChange('cat_category_Movies', 
    this.state.cat_category_Movies === 0 ? 1 : 0)} /> Movies


    <input type='checkbox' 
    checked={this.state.cat_category_Music === 1} 
    onChange={() => this.handleCategoryChange('cat_category_Music', 
    this.state.cat_category_Music === 0 ? 1 : 0)} /> Music


    <input type='checkbox' 
    checked={this.state.cat_category_News_Politics === 1} 
    onChange={() => this.handleCategoryChange('cat_category_News_Politics', 
    this.state.cat_category_News_Politics === 0 ? 1 : 0)} /> News & Politics


    <input type='checkbox' 
    checked={this.state.cat_category_Nonprofits_Activism === 1} 
    onChange={() => this.handleCategoryChange('cat_category_Nonprofits_Activism', 
    this.state.cat_category_Nonprofits_Activism === 0 ? 1 : 0)} /> Nonprofits & Activism


    <input type='checkbox' 
    checked={this.state.cat_category_People_Blogs === 1} 
    onChange={() => this.handleCategoryChange('cat_category_People_Blogs', 
    this.state.cat_category_People_Blogs === 0 ? 1 : 0)} /> People & Blogs


    <input type='checkbox' 
    checked={this.state.cat_category_Pets_Animals === 1} 
    onChange={() => this.handleCategoryChange('cat_category_Pets_Animals', 
    this.state.cat_category_Pets_Animals === 0 ? 1 : 0)} /> Pets & Animals


    <input type='checkbox' 
    checked={this.state.cat_category_Science_Technology === 1} 
    onChange={() => this.handleCategoryChange('cat_category_Science_Technology', 
    this.state.cat_category_Science_Technology === 0 ? 1 : 0)} /> Science & Technology


    <input type='checkbox' 
    checked={this.state.cat_category_Shows === 1} 
    onChange={() => this.handleCategoryChange('cat_category_Shows', 
    this.state.cat_category_Shows === 0 ? 1 : 0)} /> Shows



    <input type='checkbox' checked={this.state.cat_category_Sports === 1} 
    onChange={() => this.handleCategoryChange('cat_category_Sports', 
    this.state.cat_category_Sports === 0 ? 1 : 0)} /> Sports


    <input type='checkbox' checked={this.state.cat_category_Trailers === 1} 
    onChange={() => this.handleCategoryChange('cat_category_Trailers', 
    this.state.cat_category_Trailers === 0 ? 1 : 0)} /> Trailers


    <input type='checkbox' 
    checked={this.state.cat_category_Travel_Events === 1} 
    onChange={() => this.handleCategoryChange('cat_category_Travel_Events', 
    this.state.cat_category_Travel_Events === 0 ? 1 : 0)} /> Travel & Events




          

    






    <div>   
    <button type='submit'>Calculate Subscribers</button>
    </div>  

    <div id="Output">
      <label>Future Subsriber Predicton: </label>
      <text id="output"></text>
    </div>


      </form>
    );
  }
}

export default Form;
