<template>
    <v-app>
        <v-navigation-drawer app v-model="drawer">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        КИПУ
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        Учебный проект
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list dense>
                <v-list-item>
                    <template v-slot:prepend>
                        <v-icon icon="mdi-ghost"></v-icon>
                    </template>
                    <v-list-item-title>Ссылка 1</v-list-item-title>
                </v-list-item>
            </v-list>

        </v-navigation-drawer>
        <v-app-bar app dark color="primary">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn>
                    <v-icon start icon="mdi-ghost"></v-icon>
                    Link One
                </v-btn>
                <v-btn>Link Two</v-btn>
                <v-btn>Link Three</v-btn>
            </v-toolbar-items>
        </v-app-bar>
        <v-main>
        </v-main>
    </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    }
  }
}
</script>
