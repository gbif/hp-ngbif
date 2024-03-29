var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary
  }
});

var siteConfig = {
  routes: {
    occurrenceSearch: {
      // The route you are currently using for occurrence search. The language prefix will be added automatically
      // If you need special routes per language, then you have to add locale specific overwrites. The page language is available as a global variable called `pageLang`
      route: '/data'
    }
  },
  occurrence: {
    rootPredicate: {
      "type": "in",
      "key": "datasetKey",
      "values": [
        "f455bc89-8b18-4ad2-a982-cb961022a3ab",
        "0e89ef93-34c2-4942-97f6-9d995edb1f8f",
        "beefc0e5-520f-446c-8d7a-2e1c35394144",
        "6297efc0-4442-4e8e-be58-1e0ca7729dac",
        "dbf97ebc-f931-4b99-8b3b-6fb1375b21bb"
      ]
    }
  }
};
