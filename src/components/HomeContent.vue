<template>
  <div class="next-steps">


     <p class="lead">
    <br>
    <br>
    This app demonstrates how to extend the capability of your custom built applicaitons by integrating Amazon Event Bridge's 3P SaaS partners.  Read aboout the example integrations below:
    <br><br>
    </p>

    <div class="row">
      <div class="col-md-5 mb-4">
        <h6 class="mb-3">
           <img class="mb-1 icon xs" src="/images/Auth0_Logo.54470114f9c97842303124d42d3a1c96e2a40052.png" alt="Auth0 Integration"/> 
           <br>
          <a href="https://aws.amazon.com/blogs/compute/visualize-user-behavior-with-auth0-and-amazon-eventbridge/">
           Visualize user behavior with Auth0 and Amazon EventBridge
          </a>
        </h6>
        <p> Learn how to capture user events and monitor user behavior by using the Amazon EventBridge partner integration with Auth0. This enables you to gain insights to help deliver a more customized application experience for your users.</p>
      </div>

      <div class="col-md"></div>

      <div class="col-md-5 mb-4">
        <h6 class="mb-3">
           <img class="mb-1 icon xs" style="height:80px;" src="/images/PAra-icone-Zendesk.png" alt="Zendesk Integration"/> 
           <br>
          <a href=" https://aws-blogs-prod.amazon.com/compute/bidirectional-event-orchestration/">
            Building a self-service knowledge repo with Zendesk and Amazon EventBridge
          </a>
        </h6>
        <p>
          Implement a bidirectional event orchestration pattern between AWS services and Amazon EventBridge and Zendesk. This example uses support ticket events to build a customer self-service knowledge repository.
        </p>
      </div>
    </div> 
  </div>





</template>

<script>
export default {
  name: "HomeContent",
  methods: {
async getActivities() {
      const token = await this.$auth.getTokenSilently()
      console.log( 'Token:'+token)
      axios({
        method: "GET",
        headers:{ Authorization: `Bearer ${token}` } ,  
        url: process.env.VUE_APP_APIGW_URL+'/activities',
        params:{"user_id": this.user_id},
      }).then(response => { 
        this.success = 'Data retrieved successfully';
        //this.response = JSON.stringify(response, null, 2)
        this.activities= response.data.Items

        let total =   this.total
        this.showSkeleton=0;
        this.activities.forEach(function(item) {
             //total += JSON.parse(item.metadata.S).gpxMeta['length']
            total += JSON.parse(item.metadata.S).gpxMeta['length']
            
        });
         this.$emit('DistanceTotal',total)
      }).catch(error => {
        console.log(error)
        this.response = 'Error: ' + error.response.status
      })

    }

  }
};
</script>
