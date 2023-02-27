namespace MysteryFoodApi.Utility
{
    public class Settings
    {
            private static string _googleClientId = "364147813428-he4meho4gcbdisjfb88dda3lhts1p9a6.apps.googleusercontent.com";
            public string Secret { get; set; }

            public string GoogleClientId
            {
                get => _googleClientId;
                set => _googleClientId = value;
            }
        }
}