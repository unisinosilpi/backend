import { IRegisterVitalSignsService } from '../../domain/contracts/register-vital-signs';
import { ElderDoesNotExist } from '../../domain/errors/elder-does-not-exist';
import { MissingParameterError } from '../../domain/errors/missing-parameter';
import { IHttpService, IRequest, IResponse } from '../contracts/http-service';
import { badRequest, ok, serverError } from '../utils/http';

class RegisterVitalSignsHttpService implements IHttpService {
  constructor(private readonly registerVitalSignsService: IRegisterVitalSignsService) {}

  async handle(request: IRequest): Promise<IResponse> {
    try {
      const { elderId } = request.params;
      if (!elderId) return badRequest(new MissingParameterError('elderId'));

      const requiredBody = [
        'oxygenSaturation',
        'bloodPressure',
        'heartRate',
        'breathRate',
        'bodyTemperature',
        'nurseId',
      ];
      for (const parameter of requiredBody)
        if (!request.body[parameter]) return badRequest(new MissingParameterError(parameter));

      const { oxygenSaturation, bloodPressure, heartRate, breathRate, bodyTemperature, nurseId } = request.body;
      const user = await this.registerVitalSignsService.register(
        { oxygenSaturation, bloodPressure, heartRate, breathRate, bodyTemperature },
        nurseId,
        elderId,
      );

      return ok(user);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err.name === new ElderDoesNotExist('').name) return badRequest(err as ElderDoesNotExist);
      return serverError(err);
    }
  }
}

export { RegisterVitalSignsHttpService };
