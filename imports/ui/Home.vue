<script setup></script>

<template>
    <!-- <v-container>
        <v-row align="center" justify="center">
            <v-col cols="auto">
                <v-btn size="x-large" @click="$router.push('/send')">Send</v-btn>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col cols="auto">
                <v-btn size="x-large" @click="$router.push('/recieve')">Recieve</v-btn>
            </v-col>
        </v-row>
    </v-container> -->
    <div class="container">
        <div class="profile-section">
            <div class="dashboard-section">
                <p class="page-text">Dashboard</p>
                <p class="date-text">4th July 2023</p>
            </div>
            <div class="profile">
                <v-img
                :width="60"
                :height="60"
                aspect-ratio="1/1"
                cover
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                ></v-img>
            </div>
        </div>
        <div class="main-section">
            <div class="action-area">
                <div class="action-card send-card">
                    <div class="action-icon-area">
                        <div class="outer-action-circle send-circle">
                            <div class="action-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ff6868" class="bi bi-box-arrow-up" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
                                    <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="action-button-area">
                        <v-btn width="120px" class="action-button" color="white">Send</v-btn>
                    </div>
                </div>
                <div class="action-card recieve-card">
                    <div class="action-icon-area">
                        <div class="outer-action-circle recieve-circle">
                            <div class="action-icon recieve-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#9994f7" class="bi bi-box-arrow-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"/>
                                    <path fill-rule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="action-button-area">
                        <v-btn width="120px" class="action-button" color="white">Recieve</v-btn>
                    </div>
                </div>
            </div>
            <div class="details-section">
                <div class="details-text-area">
                    <p class="activities-text">Latest activities</p>
                    <p class="see-all-text">See all</p>
                </div>
                <div class="recents-area">
                    <div class="recent-card">
                        <div class="recent-icon-area">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ff6868" class="bi bi-box-arrow-up" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
                                <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
                            </svg>
                        </div>
                        <div class="recent-text-area">
                            <p class="transfer-text">Sent to User 1</p>
                            <p class="transfer-status">Success • 8 files</p>
                        </div>
                    </div>

                    <div class="recent-card">
                        <div class="recent-icon-area">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#9994f7" class="bi bi-box-arrow-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"/>
                                <path fill-rule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
                            </svg>
                        </div>
                        <div class="recent-text-area">
                            <p class="transfer-text">Recieved from User 1</p>
                            <p class="transfer-status">Success • 8 files</p>
                        </div>
                    </div>

                    <div class="recent-card">
                        <div class="recent-icon-area">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ff6868" class="bi bi-box-arrow-up" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
                                <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
                            </svg>
                        </div>
                        <div class="recent-text-area">
                            <p class="transfer-text">Sent to User 1</p>
                            <p class="transfer-status">Success • 8 files</p>
                        </div>
                    </div>

                    <div class="recent-card">
                        <div class="recent-icon-area">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#9994f7" class="bi bi-box-arrow-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"/>
                                <path fill-rule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
                            </svg>
                        </div>
                        <div class="recent-text-area">
                            <p class="transfer-text">Recieved from User 1</p>
                            <p class="transfer-status">Success • 8 files</p>
                        </div>
                    </div>

                    <div class="recent-card">
                        <div class="recent-icon-area">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ff6868" class="bi bi-box-arrow-up" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
                                <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
                            </svg>
                        </div>
                        <div class="recent-text-area">
                            <p class="transfer-text">Sent to User 1</p>
                            <p class="transfer-status">Success • 8 files</p>
                        </div>
                    </div>

                    <div class="recent-card">
                        <div class="recent-icon-area">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#9994f7" class="bi bi-box-arrow-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"/>
                                <path fill-rule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
                            </svg>
                        </div>
                        <div class="recent-text-area">
                            <p class="transfer-text">Recieved from User 1</p>
                            <p class="transfer-status">Success • 8 files</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>

<style scoped>
  .container {
    width: 100%;
    height: 100%;
    padding: 70px 30px;
  }

  .profile-section {
    display: flex;
    justify-content: space-between;
  }

  .date-text {
    font-size: 12px;
    font-weight: 600;
    color: grey;
  }

  .page-text {
    font-size: 24px;
    font-weight: 800;
    color: rgb(75, 75, 75);
  }

  .profile {
    border-radius: 6px;
    overflow: hidden;
  }

  .main-section {
    margin-top: 40px;
  }

  .action-area {
    display: flex;
    justify-content: space-between;
  }

  .action-card {
    width: 48%;
    height: 200px;
    border-radius: 16px;
  }

  .send-card {
    background-color: rgb(255, 104, 104);
  }

  .recieve-card {
    background-color: rgb(153, 148, 247);
  }

  .action-icon-area {
    display: flex;
    justify-content: center;
  }

  .outer-action-circle {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    padding-top: 15px;
    margin-top: 20px;
    position: relative;
  }

  .send-circle {
    background-color: rgb(255, 170, 170);
  }

  .recieve-circle {
    background-color: rgb(213, 211, 255);
  }

  .action-icon {
    width: 70px;
    height: 70px;
    border-radius: 35px;
    background-color: white;
    display: flex;
    justify-content: center;
    padding-top: 20px;
    position: absolute;
  }

  .recieve-icon {
    padding-top: 25px;
  }

  .action-button-area {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .action-button {
    border-radius: 12px;
  }

  .details-section {
    margin-top: 40px;
  }

  .details-text-area {
    display: flex;
    justify-content: space-between;
  }

  .activities-text {
    font-size: 16px;
    font-weight: 800;
    color: rgb(75, 75, 75);
  }

  .see-all-text {
    font-size: 16px;
    font-weight: 800;
    color: rgb(75, 75, 75);
  }

  .recents-area {
    margin-top: 20px;
  }

  .recent-card {
    width: 100%;
    height: 80px;
    border: 1px solid rgb(231, 231, 231);
    border-radius: 10px;
    display: flex;
    padding: 15px 30px;
    margin-bottom: 15px;
  }

  .recent-icon-area {
    margin-top: 10px;
    width: 30px;
  }

  .recent-text-area {
    margin-left: 30px;
  }

  .transfer-text {
    font-weight: 800;
    font-size: 16px;
    color: rgb(75, 75, 75);
  }

  .transfer-status {
    font-weight: 800;
    font-size: 10px;
    color: rgb(161, 161, 161);
    margin-top: 6px;
  }
</style>