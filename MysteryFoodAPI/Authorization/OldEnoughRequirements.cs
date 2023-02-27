using Microsoft.AspNetCore.Authorization;

namespace MysteryFoodApi.Authorization
{
    public class OldEnoughRequirements : IAuthorizationRequirement
    {
        public OldEnoughRequirements(int minAge)
        {
            MinAge = minAge;
        }

        public int MinAge { get; set; }
    }
}